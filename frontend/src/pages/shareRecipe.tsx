import NavBar from "../components/navBar";
import MyTipTap from "../components/tiptap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useRef } from "react";
import { get } from "http";
import axios from 'axios';

interface recipeData {
  recipe_name: string;
  ingredients: string | string[];
  directions: string;
}

export interface tiptapData {
  status: boolean;
  getContent: () => string;
}



function ShareRecipe() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<recipeData>();

  const tiptapRef = useRef<tiptapData | null>(null);

  function getTipTapData(): string {
    return tiptapRef.current?.getContent() || "";
  }

  const [submitStatus, setSubmitStatus] = useState(false);

  const submitRecipe: SubmitHandler<recipeData> = async (data) => {
    const content = getTipTapData();
    data.directions = content;
    data.ingredients = data.ingredients.split(",")
    console.log(data);
    try {
	    let response = await axios.post(`${import.meta.env.VITE_URL}/api/recipes`,JSON.stringify(data), {
		    headers: {
			    'Content-Type': 'application/json'
		    }
	    })
	    if (response.status === 201) {
		    alert("Recipe successfully shared");
		    window.location.reload()
	    }
    } catch(err: any) {
	    alert("An error occurred")
    }
  };

  return (
    <main className="w-screen meshWhite pt-3 flex flex-col gap">
      <NavBar />
      <div className="w-[85%] mx-auto flex flex-col gap-3 mt-4 h-fit">
        <h1 className="text-3xl text-black my-5 font-bold">Share Recipe</h1>
        <form
          onSubmit={handleSubmit(submitRecipe)}
          className="flex flex-col gap-5"
        >
          <div>
            <label>
              <p className="text-black">Recipe Name</p>
              <input
                {...register("recipe_name", {
                  required: "Recipe name is required",
                })}
                type="text"
                placeholder="Recipe Name"
                className="w-full p-2 rounded-lg border border-gray-300 bg-white text-black"
              />
              {errors.title && (
                <p className="text-red-500 text-xs">{errors.title.message}</p>
              )}
            </label>
          </div>
          <div>
            <label>
              <p className="text-black">Ingredients</p>
              <input
                {...register("ingredients", {
                  required: "Ingredients are required",
                  validate: (data) => {
                    if (!data.includes(",")) {
                      return "Please separate ingredients with a comma";
                    }
                  },
                })}
                type="text"
                placeholder="Ingredients: Salad, Rice, etc"
                className="w-full p-2 rounded-lg border border-gray-300 bg-white text-black"
              />
              {errors.ingredients && (
                <p className="text-xs text-red-500">
                  {errors.ingredients.message}
                </p>
              )}
            </label>
          </div>
          <MyTipTap
            tiptap={{ status: submitStatus, getContent: getTipTapData }}
            ref={tiptapRef}
          />
          <button
            className="bg-yellow-300 text-black mt-1 border-black w-fit mb-5"
            onClick={() => setSubmitStatus(true)}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Share Recipe"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default ShareRecipe;
