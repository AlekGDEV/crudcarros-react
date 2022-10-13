import {Card, CardContent, CardActionArea} from "@mui/material"
import {DirectionsCar} from "@mui/icons-material"
import {TwoWheeler} from "@mui/icons-material"
import {PedalBike} from "@mui/icons-material"

function Info(props){
    return(
        <Card style={{marginTop: 5}}>
            <CardContent>

                {props.icon} {props.title} Qtd: {props.qtd}
            </CardContent>
        </Card>
    );
}

export default function Dashboard(){
    return(
        <div>
            <Info icon={<DirectionsCar/>} qtd="10" title="carros"/>
            <Info icon={<TwoWheeler/>}qtd="5" title="motos"/>
            <Info icon={<PedalBike/>} qtd="1" title="bicicleta"/>
        </div>
    );
}