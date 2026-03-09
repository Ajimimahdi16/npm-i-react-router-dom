import{Outlet} from"react-router-dom";
import Header from "../Componet/NavBar";
import Footer from "../Componet/Footer";

export default function defaultLayout(){

    return(
        <>
        <header> <Header /></header>



         
         <main><Outlet /></main>
          



        <footer><Footer /></footer>
       
      
        
        </>
    );
}