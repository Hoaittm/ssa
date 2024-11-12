const postService = require("../service/postService");

const getPostAll =async(req,res) =>{
  try{
    const posts = await postService.getPostAll();
    res.json(posts);
  }
  catch(err){
    res.status(500).json({error:err.message});
  }
}
// Controller to handle fetching posts by menu item
const getPostByMenuItem = async (req, res) => {
  const { topic_id } = req.params;
  try {
    const post = await postService.getPostByMenuItem(topic_id);
    res.json(post);
  } catch (err) {
    res
      .status(err.message === "Post not found" ? 404 : 500)
      .json({ error: err.message });
  }
};
const getPostDetails = async (req, res) =>{
  const {id}=req.params;
  try{
    const post = await postService.getPostDetails(id);
    res.json(post);
  }catch (err){
    res.status(500).json({error:err.message});
  }
}
module.exports = {
  getPostByMenuItem,
  getPostAll,
  getPostDetails
};
