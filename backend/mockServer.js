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
]

const server = new Pretender(function () {
    this.get('/api/posts/:id', function (request) {
        let payload = JSON.stringify(posts[request.params.id]);
        return [200, { "Content-Type": "application/json" }, payload];
    });
    this.get('/api/posts/', function (request) {
        let payload = JSON.stringify(posts);
        return [200, { "Content-Type": "application/json" }, payload];
    });
});

export default server;