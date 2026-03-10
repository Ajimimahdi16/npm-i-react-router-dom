import{Outlet} from"react-router-dom";
import MainNavBar from "../Componet/MainNavBar";
import Footer from "../Componet/Footer";

export default function defaultLayout(){

    return(
        <>
        <header> <MainNavBar /></header>



         
         <main><Outlet /></main>
          



        <footer><Footer /></footer>
       
      
        
        </>
    );
}