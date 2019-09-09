SELECT *
FROM posts p
JOIN users u ON p.author_id = u.id 
-- will need to add in a % in somewhere to have the search work 
WHERE u.id != $1;