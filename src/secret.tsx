
export const secretNum = Math.round(Math.random()*1000000);

export default function Secret(){
    return(
        <p>{secretNum}</p>
    )
}