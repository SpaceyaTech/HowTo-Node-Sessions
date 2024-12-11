# Mon 09 Dec task

Use any of Node's inbuilt modules and use it in your own file

## What are some of node's inbuilt modules?

Node.js has several inbuilt modules,including;

- os, fs, path, http

we already used the http module in the first two sessions of 'How-To-Node'

- os provides information about the operating system.

### Crypto Module

- crypto module performs cfryptographic operations eg hashing data, encryption and decryption and creating random numbers

#### Hashing

This is a method that changes plain text to encrypted (cipher) text. It is important to note that this is a one way function, so it is not possible to get the original text from the hashed value, but it is possible to regenerate it with the original text. This is what makes it ideal for managing passwords and login credentials.(this is different from encryption and decryption)

When coming up with the code for the crypto password usage, I read that Node.js handles HTTP requests and responses as streams, which are divided into smaller chunks to make processing data faster and more memory efficient. 
