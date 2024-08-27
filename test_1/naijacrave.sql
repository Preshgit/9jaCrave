CREATE DATABASE IF NOT EXISTS naijacrave;
USE naijacrave;
CREATE TABLE IF NOT EXISTS ingredients (
	ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
	ingredient_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS recipe (
       	recipe_id INT AUTO_INCREMENT PRIMARY KEY,
	recipe_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ingredient_recipe (
	recipe_id INT NOT NULL,
	ingredient_id INT NOT NULL,
	PRIMARY KEY (recipe_id, ingredient_id),
	FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id),
	FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id)
);

CREATE TABLE IF NOT EXISTS directions (
	direction_id INT AUTO_INCREMENT PRIMARY KEY,
	recipe_id INT NOT NULL,
	direction TEXT NOT NULL,
	FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id)
);
