SELECT id, username, profile_pic, password
FROM users
WHERE username = $1; 