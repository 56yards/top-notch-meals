CREATE TABLE IF NOT EXISTS recipes (
  id SERIAL PRIMARY KEY,
  name varchar(250) NOT NULL,
  ingredients text,
  method text
);

INSERT INTO recipes (name, ingredients, method) VALUES ('Holey Moley Pancakes', concat('125g plain flour', CHR(13),CHR(10), '1/2 teaspoon baking soda ', CHR(13),CHR(10), '1 egg ', CHR(13), CHR(10), '1 tablespoon sugar ', CHR(13), CHR(10), '25g butter ', CHR(13), CHR(10), '150 ml whole milk'), concat('1. Mix the flour with the baking soda, egg and sugar ', CHR(13), CHR(10), '2. Then alterantively, melt the butter ', CHR(13), CHR(10),'3. Add the milk ', CHR(13), CHR(10),'4. And start cooking  '));
INSERT INTO recipes (name, ingredients, method) VALUES ('Chocolate Fudge Cake', concat('500g Milk Chocolate', CHR(13),CHR(10), '2 tablespoons fudge ', CHR(13),CHR(10), '3 eggs ', CHR(13), CHR(10), '2 tablespoon sugar ', CHR(13), CHR(10), '35g butter ', CHR(13), CHR(10), '50 ml whole milk'), concat('1. Mix the all the ingredients in a large bowl', CHR(13), CHR(10), '2. Place ingredients in an oven proof dish ', CHR(13), CHR(10),'3. Put in pre-heated oven for 45 minutes on 190 degrees '));
INSERT INTO recipes (name, ingredients, method) VALUES ('Lazy Lasagne', concat('3 tbsp Olive oil', CHR(13),CHR(10), '1 onion, finely chopped ', CHR(13),CHR(10), '3 garlic gloves, crushed ', CHR(13), CHR(10), '200 ml milk ', CHR(13), CHR(10), '2 bay leaves ', CHR(13), CHR(10), '500 ml red wine'), concat('1. First, make the béchamel sauce. ', CHR(13), CHR(10), '2. For the meat sauce, put the oil, celery, onion, carrot, garlic and pancetta in another large saucepan. ', CHR(13), CHR(10),'3. Tip in the beef and pork mince, the milk and chopped tomatoes. ', CHR(13), CHR(10),'4. Heat the oven to 180C/160C'));