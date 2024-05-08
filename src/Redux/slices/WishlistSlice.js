        import { createSlice } from "@reduxjs/toolkit";
        const wishlistfailed= true;
        const wishlistSlice = createSlice({
            name:'wishlist',
            initialState:{
                wishlist:[]
            },
            reducers:{
                addtowishlist:(state,action)=>{
                    //logic to prevent duplication of items to wishlist
                    const isduplicate=state.wishlist.some(item=>item.id==action.payload.id)
                if(!isduplicate){ state.wishlist.push(action.payload)
                localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
                
              
                }else{
                window.alert(`[ ${action.payload.title} ] is alreay exist in your wishlist` );
                }
                }, 
                removefromwishlist:(state,action)=>{ 
                    const filtering =state.wishlist.filter(item=>item.id!=action.payload);
                    state.wishlist=filtering;

                }
            }
        });
        export const {addtowishlist,removefromwishlist}=wishlistSlice.actions
        export default wishlistSlice.reducer

