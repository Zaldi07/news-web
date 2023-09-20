import React, { useState, useEffect } from "react";
import Footer from "../UI/Footer";
import img from "../Abstract Breaking Live News Free Logo.png";
function Home() {
  const [getNews, setGetNews] = useState([]);
  const [picture, setpicture] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [category, setcategory] = useState("business");
  const [open, setopen] = useState(false);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c053857c273e4cab9070a358522f1c99`)
      .then((res) => res.json())
      .then((data) => {
        setGetNews(data.articles); // Perhatikan bahwa kami mengambil data.articles dari respons API
        setpicture(data.articles[4].urlToImage);

        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [category]);

  return (
    <>
      <div>
        <nav className=" fixed top-0 w-full h-14 flex bg-white shadow-md items-center justify-between px-[5%]   md:px-[6%] z-30">
          <div className="">
            <div className="font-medium text-xl flex items-center gap-2">
              <div>
                <img src={img} alt="" className="w-10 " />
              </div>
              <div className=" text-2xl font-semibold whitespace-nowrap ">News Update</div>
            </div>
          </div>
          <div className="md:block hidden">
            <ul className="flex  md:gap-10  text-sm md:text-xl ">
              <button onClick={() => setcategory("business")} className="focus:text-[#F23030] focus:font-semibold ease-in-out duration-1000">
                <li className="">Business</li>
              </button>
              <button onClick={() => setcategory("Technology")} className="focus:text-[#F23030] focus:font-semibold ease-in-out duration-1000">
                <li>Technology</li>
              </button>
              <button onClick={() => setcategory("sport")} className="focus:text-[#F23030] focus:font-semibold ease-in-out duration-1000">
                <li>Sport</li>
              </button>
              <button onClick={() => setcategory("entertainment")} className="focus:text-[#F23030] focus:font-semibold ease-in-out duration-1000">
                <li>Entertaiment</li>
              </button>
              <button onClick={() => setcategory("science")} className="focus:text-[#F23030] focus:font-bold">
                <li>Science</li>
              </button>
              <button onClick={() => setcategory("health")} className="focus:text-[#F23030] focus:font-bold">
                <li>Health</li>
              </button>
              <button onClick={() => setcategory("health")} className="focus:text-[#F23030] focus:font-bold bg-[#F23030] text-white rounded-lg px-5 py-2">
                <li>Login</li>
              </button>
            </ul>
          </div>
          {open ? (
            <button onClick={() => setopen(!open)} className="text-4xl pt-2  md:hidden ease-in-out duration-500">
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          ) : (
            <button onClick={() => setopen(!open)} className="text-4xl pt-2  md:hidden ease-in-out duration-500">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          )}
        </nav>
        <div
          className={
            open
              ? "bg-black  backdrop-blur-sm  rounded-xl md:hidden fixed w-full h-1/2 md:mt-14   bg-opacity-80 -mt-[400px] ease-in-out duration-300"
              : "bg-black  backdrop-blur-sm  rounded-xl md:hidden fixed w-full h-1/2 md:mt-14   bg-opacity-80  mt-12 ease-in-out duration-300"
          }
        >
          <div className="flex  flex-col  gap-5 md:gap-10   md:text-xl  text-white pt-10 mt-10">
            <button onClick={() => setcategory("business")} className="focus:font-bold">
              <h1 className="">Bussines</h1>
            </button>
            <button onClick={() => setcategory("Technology")} className="focus:font-bold">
              <h1>Technology</h1>
            </button>
            <button onClick={() => setcategory("sport")} className="focus:font-bold">
              <h1>Sport</h1>
            </button>
            <button onClick={() => setcategory("science")} className="focus:font-bold">
              <h1>Science</h1>
            </button>
            <button onClick={() => setcategory("health")} className="focus:font-bold w-1/2 mx-auto focus:bg-[#F23030] text-white rounded-lg px-5 py-2">
              <h1>Health</h1>
            </button>
            <button onClick={() => setcategory("health")} className="focus:text-[#F23030] focus:font-bold w-1/2 mx-auto bg-[#F23030] text-white rounded-lg px-5 py-2">
              <h1>Login</h1>
            </button>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font  h-full">
        <div className="container px-5 py-16 mx-auto max-w-7x1">
          <p className="text-3xl font-medium pt-0 md:pt-4 pb-4 uppercase">{category}</p>
          {getNews ? (
            <div className="w-full h-1/2  pb-4 md:grid-cols-5 grid gap-2">
              <div className=" md:col-span-3">
                <img src={picture} alt="" className="w-full  h-[1/2] md:h-[500px] object-cover  " />
              </div>
              <div className="md:col-span-2 ">
                <img src={picture} alt="" className="w-full  hidden md:block h-[1/2] md:h-[500px] object-cover  " />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <div className="flex  flex-row mb-4  ">
            <div className="w-[60%] md:w-[80%]">
              <input
                type="text"
                className="bg-[#F6F6FB]  py-1 rounded-md w-full "
                placeholder="Search by title..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>
            <div className="w-[40%] md:w-[20%]">
              <select
                placeholder="seacrh by author.."
                className="bg-[#F6F6FB] rounded-md py-1  w-full pr-2 ml-2"
                value={authorFilter}
                onChange={(e) => setAuthorFilter(e.target.value)}
              >
                <option value=""> Select Author</option>

                {getNews?.map((news) => (
                  <option key={news.author} value={news.author}>
                    {news.author}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {getNews?.length > 0 ? (
              getNews
                .filter((news) => {
                  // Gunakan filter untuk menyaring berita berdasarkan author
                  if (authorFilter !== "") {
                    return news.author === authorFilter;
                  }
                  return true;
                })
                .filter((news) => {
                  // Gunakan filter untuk pencarian berdasarkan judul
                  if (searchKeyword && searchKeyword !== "") {
                    return news.title.toLowerCase().includes(searchKeyword.toLowerCase());
                  }
                  return true;
                })

                .map((news, index) => (
                  <div key={index} class=" h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img class="rounded-t-lg h-[200px] bg-cover w-full " src={news.urlToImage} alt={news.title} />
                    </a>

                    <div class="p-5 ">
                      <p className="text-xs font-bold"> author : {news.author ? news.author : "removed"}</p>
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{news.title}</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-16 overflow-auto">{news.description}</p>
                      <a
                        href={news.url}
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F23030] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))
            ) : (
              <p className="flex items-center justify-center w-full h-full bg-black text-white">Loading...</p>
            )}
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Home;
