CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT, 
    content TEXT, 
    author_id INTEGER REFERENCES users(id)
)