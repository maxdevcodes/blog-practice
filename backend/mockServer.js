import Pretender from 'pretender';

const posts = [
    {
        id: 0,
        title: "Post #0",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus quis justo tempus malesuada fermentum vitae ex. Aenean sollicitudin tristique urna, quis tincidunt purus faucibus sed. Donec egestas libero a luctus sodales. Integer non tempus mi. Morbi justo purus, gravida sit amet justo non, gravida tempor sapien. Sed vitae metus sit amet quam ultrices blandit. Cras lobortis ipsum quam. Vivamus non malesuada erat. Pellentesque iaculis purus enim, vitae rhoncus mi posuere sit amet. Vivamus fringilla elit vitae sapien pellentesque, vel faucibus justo scelerisque. Vivamus feugiat, erat eget volutpat rutrum, tellus metus scelerisque lorem, eu blandit tortor nunc vel tellus."
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
]

const server = new Pretender(function () {
    this.get('/api/posts/:id', function (request) {
        let payload = JSON.stringify(posts[request.params.id]);
        return [200, { "Content-Type": "application/json" }, payload];
    });
    this.get('/api/posts/', function (request) {
        const pageSize = 5;
        let queryPost;
        if (Number(request.queryParams.page)) {
            queryPost = posts.slice(pageSize * request.queryParams.page, (pageSize * request.queryParams.page) + 5);
        } else {
            queryPost = posts.slice(0, 5);
        }
        let payload = JSON.stringify(queryPost);
        return [200, { "Content-Type": "application/json" }, payload];
    });
    this.post('/api/post/', function (request) {
        let post = {id: posts.length, ...JSON.parse(request.sendArguments[0])};
        posts.push(post);
        return [200, { "Content-Type": "application/json" }, "Post added"];
    });
    this.get('/api/latestPosts/', function(request) {
        let payload = JSON.stringify(posts.slice(0, 3));
        return [200, { "Content-Type": "application/json" }, payload];
    });
    this.get('/api/postsSize/', function (request) {
        let payload = JSON.stringify(Math.ceil(posts.length / 5));
        return [200, { "Content-Type": "application/json" }, payload];
    });
});

export default server;