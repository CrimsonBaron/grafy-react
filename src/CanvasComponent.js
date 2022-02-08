import react, {useRef, useEffect} from "react";

const CanvasComponent = (props) =>{
    const {graphPoints} = props
    const canvasRef = useRef(null)

    const clear = (ctx, canvas)=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    const drawPoint = (ctx, point)=>{
        ctx.fillStyle = 'green'
        ctx.beginPath()
        ctx.arc(point.x*25, point.y*25, 20, 0, 2*Math.PI)
        ctx.fill()
    }

    const drawLine = (ctx, from, to)=>{
        ctx.beginPath();
        ctx.strokeStyle="green"
        ctx.moveTo(from.x*25, from.y*25);
        ctx.lineTo(to.x*25, to.y*25);
        ctx.stroke();
    }


    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        clear(context,canvas);
        canvas.width = 1200;
        canvas.height = 720

        graphPoints.forEach(point => {
            drawPoint(context,point);

            let from = {
                x: point.x,
                y: point.y
            }
              
              point.connection.forEach(con=>{
                let to= {
                    x: graphPoints[con].x,
                    y: graphPoints[con].y,
                }
                console.log( to.x);  
                drawLine(context,from,to);
            })
        });
        
      }, [drawPoint])

    return(
        <canvas  id="canvasComp" ref={canvasRef} />
    )
}

export default CanvasComponent;