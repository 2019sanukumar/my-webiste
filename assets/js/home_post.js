const { response } = require("express");

{
    // method to sumbit the form for new post using Ajax
    console.log('added');
    let createPost=function()
    {
        let newPostForm=$('#new-post-form');//getting form data
        newPostForm.submit(function(e){
            e.preventDefault();// preventing deafult
            $.ajax({
                type:'post',
                url:'/post/user-feed',
                data:newPostForm.serialize(),
                success:function(data)
                {
                    console.log(data);

                },error:function(error)
                {
                    console.log(error,responseText);
                }
            })

        });
    }

    //method to create a post in DOM







    createPost();
}