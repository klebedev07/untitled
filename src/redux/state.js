

let state = {
    profilePage: {
        posts: [
            {id:1, message: "Hi bro", likeCount: 12},
            {id:2, message: "Hjw are youu?", likeCount: 1},
            {id:3, message: "What are you doing?", likeCount: 10},
            {id:4, message: "Cool page!", likeCount: 4},
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {id:5, message: postMessage, likeCount: 0}
    state.profilePage.posts.push(newPost)
}
export default state