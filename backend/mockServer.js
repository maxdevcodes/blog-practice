import Pretender from 'pretender';

var posts = [
    {
        id: 0,
        title: "Post #0",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus.",
        tags: [0, 1]
    },
    {
        id: 1,
        title: "Post #1",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
    {
        id: 2,
        title: "Post #2",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
    {
        id: 3,
        title: "Post #3",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
    {
        id: 4,
        title: "Post #4",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
    {
        id: 5,
        title: "Post #5",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
    {
        id: 6,
        title: "Post #6",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
    {
        id: 7,
        title: "Post #7",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
    {
        id: 8,
        title: "Post #8",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
    {
        id: 9,
        title: "Post #9",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
    {
        id: 10,
        title: "Post #10",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
    },
];

var comments = [
    {
        id: 0,
        postID: 10,
        author: "John",
        comment: "Lorem ipsum dolor sit amet",
        replyID: null,
    },
    {
        id: 1,
        postID: 10,
        author: "Anna",
        comment: "Lorem ipsum dolor sit amet",
        replyID: null,
    },
    {
        id: 2,
        postID: 10,
        author: "Paul",
        comment: "Lorem ipsum dolor sit amet",
        replyID: 0,
    },
    {
        id: 3,
        postID: 10,
        author: "Laura",
        comment: "Lorem ipsum dolor sit amet",
        replyID: 0,
    },
];

var tags = [
    {
        id: 0,
        name: 'Tag #1',
        path: 'tag-1'
    },
    {
        id: 1,
        name: 'Tag #2',
        path: 'tag-2'
    }
];

const server = new Pretender(function () {
    this.get('/api/posts/:id', function (request) {
        const index = posts.findIndex(function (elem, index) {
            return elem.id == request.params.id ? true : false;
        });
        let payload = JSON.stringify(posts[index]);
        return [200, { "Content-Type": "application/json" }, payload];
    });
    this.delete('/api/posts/', function (request) {
        const index = posts.findIndex(function(elem, index) {
            return elem.id == request.requestBody ? index : false;
        });
        posts.splice(index, 1);
        let response = { res: 'Deleted post' };
        return [200, { "Content-Type": "application/json", "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true  }, JSON.stringify(response)];
    });
    this.get('/api/posts/', function (request) {
        const pageSize = 5;
        let reversedPosts = [...posts].reverse();
        let queryPost;
        if (Number(request.queryParams.page)) {
            queryPost = reversedPosts.slice(pageSize * request.queryParams.page, (pageSize * request.queryParams.page) + 5);
        } else {
            queryPost = reversedPosts.slice(0, 5);
        }
        let payload = JSON.stringify(queryPost);
        return [200, { "Content-Type": "application/json" }, payload];
    });
    this.post('/api/post/', function (request) {
        let post = { id: posts.length, ...JSON.parse(request.sendArguments[0]) };
        posts.push(post);
        let response = { res: 'Added post titled: ' + post.title };
        return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
    this.put('/api/post/', function (request) {
        let post = JSON.parse(request.sendArguments[0]);
        posts[post.id] = post;
        let response = { res: 'Edited post' };
        return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
    this.get('/api/latestPosts/', function (request) {
        let reversedPosts = [...posts].reverse();
        let payload = JSON.stringify(reversedPosts.slice(0, 3));
        return [200, { "Content-Type": "application/json" }, payload];
    });
    this.get('/api/postsSize/', function (request) {
        let payload = JSON.stringify(Math.ceil(posts.length / 5));
        return [200, { "Content-Type": "application/json" }, payload];
    });
    this.get('/api/comments/:postId', function (request) {
        let postID = request.params.postId;
        let payload = JSON.stringify(comments.filter(element => {return element.postID == postID ? element : false;}));
        return [200, { "Content-Type": "application/json" }, payload];
    });
    this.post('/api/comments/', function(request) {
        let body = JSON.parse(request.requestBody);
        let newComment = {
            id: comments.length,
            postID: body.postID,
            author: body.name,
            comment: body.comment,
            replyID: body.replyID,
        };
        comments.push(newComment);
        let response = { res: 'Added comment' };
        return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
    });
    this.get('/api/tags/:tags', function (request) {
        let tagIds = JSON.parse(request.params.tags);
        let payload = [];
        tagIds.forEach(tagId => {
            payload.push(tags.find(element => {return element.id == tagId ? element : false;}));
        });
        return [200, { "Content-Type": "application/json" }, JSON.stringify(payload)];
    });
});

export default server;