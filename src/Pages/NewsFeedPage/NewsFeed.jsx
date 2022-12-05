import React from "react";
import {Link} from 'react-router-dom'
import {AiOutlineStar} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import {BiComment} from 'react-icons/bi';
import {BsThreeDots} from 'react-icons/bs'


export const NewsFeed = () => {
  return (
    <main className="w-full h-full p-4" data-theme='winter'>
      <section className="w-3/4 mx-auto">
        {/* Nav */}
        <nav className="h-16 flex justify-between items-center bg-neutral px-6">
          <div className="flex items-center">
            <img className="w-6 h-6" src="src/images/icon-facebook.svg" alt="logo" />
            <h2 className="text-xl text-bold ml-2">Facebook</h2>
          </div>

          {/* Form */}
          <form className="flex items-center justify-center w-1/2">
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs mr-2" ></input>
            <button className="btn btn-xs btn-outline">Search</button>
          </form>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn hover:scale-110 w-12 h-10 rounded-full">
              <div className="avatar">
                <div className="w-10 h-10 rounded-full">
                  <img src="src/images/pexels-arvin-sheikholeslami-12168718.jpg" alt="Profile" />
                </div>
              </div>
            </label>
            <div tabIndex={0} className="dropdown-content menu py-2 px-4 shadow bg-base-100 rounded-box w-32 ">
              <button className="btn btn-outline btn-xs">Profile</button>
              <button className='btn btn-error btn-xs mt-2 hover:scale-110'>Logout</button>
            </div>
          </div>
        </nav>

        <hr />

        <section className="flex w-full">

          {/* SideBar */}
          <div className='w-1/4 h-screen bg-neutral mr-1'>
            <div className="avatar mt-6 ml-24">
              <div className="w-24 rounded-full">
                <img src="src/images/pexels-arvin-sheikholeslami-12168718.jpg" alt="Profile" />
              </div>
            </div>
            <h2 className="text-center mt-2 text-lg text-bold">User Name</h2>
          </div>

          {/* Newsfeed */}
          <article className="w-3/4 h-screen bg-neutral">
            {/* What's section */}
            <section className="w-3/4 mt-6">
              <div className="flex w-full justify-end">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full">
                    <img src="src/images/pexels-arvin-sheikholeslami-12168718.jpg" alt="Profile" />
                  </div>
                  <textarea className="textarea textarea-bordered w-96 h-16 ml-2" placeholder="What's in your mind?"></textarea>
                </div>
              </div>
              <div className="flex justify-end mx-auto space-x-2 mt-2">
                <button className="btn btn-xs btn-outline btn-error">Discard</button>
                <button className="btn btn-xs hover:scale-110 btn-secondary">Post</button>
              </div>           
            </section>

            {/* Post Section */}
            <section className="w-3/4 mx-auto mt-4">
            {/* Profile */}
              <div className="avatar ml-1">
                  <div className="w-10 h-10 rounded-full">
                    <img src="src/images/pexels-arvin-sheikholeslami-12168718.jpg" alt="Profile" />
                  </div>
              </div>

              {/* Post */}
              <div className="w-11/12 pl-6 pr-6 py-2 mx-auto bg-gray-50 rounded-lg -mt-7">
                <div className="flex justify-between"> 
                  <p className="text-xs -mt-1">12.11.2022</p>
                  <div className="dropdown dropdown-left w-2 h-2">
                    <label tabIndex={0} >
                      <button><BsThreeDots /></button>
                    </label>
                    <div tabIndex={0} className="dropdown-content menu py-2 px-4 shadow bg-gray-200 rounded-box w-24 ">
                      <button className="btn btn-outline btn-xs h-2">Edit</button>
                      <button className='btn btn-error btn-xs mt-2 hover:scale-110 h-2'>Delete</button>
                    </div>
                  </div>
                </div>
                <p className="mx-auto mt-2 text-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptatem dolor doloribus autem odio odit officiis architecto mollitia quod! Ex facere tenetur doloremque ut fugiat laudantium consequatur eum deserunt suscipit?
                </p>
                
                <div className="flex text-sm number-sm w-full justify-between mt-1 px-6">
                  <div className="flex items-center">
                    <AiFillStar />
                    <p> 10 </p>
                  </div>
                  <Link to="/comments">10 comments</Link>
                </div>

                <hr className="w-11/12 mx-auto"/>

                <div className="flex h-2 w-11/12 justify-around mx-auto mt-2">
                  <div className="flex w-1/2 items-center"> 
                    <button className="mx-auto hover:scale-110">
                      <div className="flex items-center">
                        <AiOutlineStar />
                        <p className="text-sm ml-2">Star</p>
                      </div>
                       
                    </button>
                  </div>
                  <div className="w-1/2 flex items-center">
                    <button className="mx-auto hover:scale-110 flex items-center">
                        <BiComment />
                        <p className="text-sm mb-1 ml-2">Comment</p>                     
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </section>
      </section>      
    </main>
  );
};
