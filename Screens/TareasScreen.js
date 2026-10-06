import { useEffect, useState } from "react";
import { getTasks } from "../services/tareasService";
import { ScrollView,View,Text} from "react-native";


export default function TareasScreen({navigation}){
    //para  almacenar mis tareas del back

    const [tasks,setTasks] = useState([]);
    //Funcion para llamar endpoints
    async function llamarTareas() {
        try {
            const datos = await getTasks(); //getTask viene de services
            setTasks(datos);
        }catch(err){
            console.log(err);
        }
    }

    //por navigarion se ejecuta siempre que se muestre la pagina

    useEffect(()=>{
        llamarTareas();
    },[navigation]);

    return(
        <View>
            <ScrollView>
                {tasks.map((task)=>(
                    <View key={task.id}>
                        <Text>{task.titulo}</Text>
                        <Text>{task.descripcion}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}