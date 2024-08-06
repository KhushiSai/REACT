let ClockTime=()=>{
    let time=new Date();
    return <p className="lead">This is the current time : {time.toLocaleDateString()} - {time.toLocateTimeString()}</p>

};
export default ClockTime;