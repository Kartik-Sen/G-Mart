import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Loading = () => {
    const {navigate}=useContext(AppContext);
    const {search}=useLocation();
    const query = new URLSearchParams(search);
    const nextUrl = query.get("next");
    useEffect(()=>{
        if(nextUrl){
            setTimeout(() => {
                navigate(`/${nextUrl}`);
            }, 5000);
        }
    }, [nextUrl]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-primary"></div>
    </div>
  );
};

export default Loading;