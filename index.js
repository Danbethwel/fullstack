//function greeting(message){
//    return alert(`${message} everyone`);
//}

// let greeting = (message)=>alert(`${message} everyone`);

// greeting('Good Morning');

let createBlog =(title,body) => {
    if (!title){
        throw new Error('A title is required');
    }

    if (!body){
        throw new Error('Body can`t be empty')
    }

    return alert(`${title} - ${body}`);
};

createBlog("Blog title", 'Blog Body');
