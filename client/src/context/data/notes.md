const getProducts = async () => {
    const data = await fetchData();
    const users = await FetchUsers();
    const products = JSON.parse(data);
    console.log(products)
    const comments = products.map((item) => item.comments);
    const curUser = users;

    for (let i = 0; i < comments.length; i++) {
      if (comments[i] === undefined || comments[i] === null) {
        comments[i] = [];
      } else {
        for (let j = 0; j < comments[i].length; j++) {
          comments[i][j]["active"] = false;
          if (comments[i][j].replies === undefined) {
            comments[i][j].replies = [];
          } else {
            for (let k = 0; k < comments[i][j].replies.length; k++) {
              comments[i][j].replies[k]["active"] = false;
            }
          }
        }
      }
    }
    console.log(comments);
    console.log(curUser)
    dispatch({
      type: GET_DATA,
      payload1: products,
      payload2: comments,
      payload3: curUser,
    });
  };


  // wokring kind of ( wont remain after reload)

  async function httpSubmitProduct(product){
    try{
      console.log(product)
      return await fetch(`${URL}/products`, {
        method: 'post',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(product)
      })
    } catch(err){
      console.log(err)
      return {
        ok: false
      }
    }
  }
  const getProducts = useCallback(async () => {
    const fetchProducts = await fetch(`${URL}/products/updated`);
    const parsedData = JSON.parse(fetchProducts)
    console.log(parsedData)
    dispatch({
      type: SET_PRODUCTS, payload: state.products
    })
  }, [])
 
  const addNewFeedback = useCallback(async (product,newFeedback) => {
    const data = newFeedback
    console.log(data)
    const title = newFeedback.title
    const description = newFeedback.description
    const category = newFeedback.category
    console.log(title, description, category)
    const response = await httpSubmitProduct({
      title,
      description,
      category
    })
    console.log(response)
    const success = response.ok
    if(success){
      getProducts()
      dispatch({
        type: GET_DATA,
        payload1: newFeedback,
        payload2: state.comments,
        payload3: state.curUser,
      });
    }
  }, [getProducts,state.products, state.comments, state.curUser])