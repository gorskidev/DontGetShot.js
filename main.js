window.onload = () => {
    let win = false
    document.querySelector("svg").addEventListener("mousemove", (e) => {
        //console.log(e.offsetX, e.offsetY)
        document.querySelector("html > body > div > svg > g").setAttribute('transform', `rotate(${convertAngle(e)} 276.8685913085939,190.38461303710932)`)
        document.querySelector("html > body > div > svg > g > line:nth-of-type(4)").setAttribute('x2', `${extendLineLength()}`)
        convertAngle(e)
        game(e)
    })

    const extendLineLength = () => {
        let length = 5;
    
        return 430
    }

    const measureDistance = (width, height, e) => {
        const offsetX = e.offsetX
        const offsetY = e.offsetY
        const centerX = width/2
        const centerY = height/2
        
        let distanceX = offsetX - centerX
        let distanceY = offsetY - centerY

        const distance = Math.floor(Math.sqrt(Math.pow(distanceY, 2) + Math.pow(distanceX, 2)), 1000)
        //console.log(distance)
        return [distanceX, distanceY, distance]
    }

    const convertAngle = (e) => {
        let distanceX = measureDistance(580, 400, e)[0]
        let distanceY = measureDistance(580, 400, e)[1]
        let distance = measureDistance(580, 400, e)[2]

        const sinValue = distanceY/distance
        const arcSin = Math.asin(sinValue)
        let degrees = arcSin*180/Math.PI

        if (distanceX < 0) {
            degrees += 180 
        }

        if (distanceX < 0 && distanceY < 0) { 
            degrees = -degrees
        }

        if (distanceX < 0 && distanceY > 0) { 
            degrees = -degrees
        }
        
        //console.log(degrees)
        //console.log(`triangle: ${distanceX}, ${distanceY}, ${distance}`)
        //console.log(degrees)
        return degrees
    }

    const game = (e) => {
        let distanceX = measureDistance(580, 400, e)[0]
        let distanceY = measureDistance(580, 400, e)[1]

       // console.log(Math.abs(distanceX), Math.abs(distanceY))
       // console.log(centerX, centerY)

        if(Math.abs(distanceY) < 20 && Math.abs(distanceX) < 20) {
            win = true;
            alert("You won!")
            window.reload();
        }
    }

    setTimeout(() => {
            if (win == false) {
                alert("He is pretty quick, isn't he? You lost!")
                window.reload();
            }
    }, 5000)
}
