import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Mascota(props){
   const navigate = useNavigate();

   const handleClick = () => {
       // Redirigir a la página de detalle con el id de la mascota
       navigate(`/detalle/${props.mascota.id}`);
   };

   return(
       <Card 
          style={{ width: '18rem', height: '24rem' }} 
          className="mb-3" 
          onClick={handleClick}
          >
           <Card.Img style={{ height: '14rem' }}  variant="top" src={props.mascota.foto} alt={props.mascota.descripcion} />
           <Card.Body>
               <Card.Title>{props.mascota.nombre}</Card.Title>
               <Card.Text>
                   {props.mascota.descripcion}
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Mascota;
