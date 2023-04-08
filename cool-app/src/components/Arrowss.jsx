const Arrows = () => {
    const style = {
        color:'grey',
            width: '15px',
            height: '15px',
            transition: '.5s',
            float: 'left',
            boxShadow: '-2px 2px 0 black'
        
    }
    return ( 
<div>
    {/* <div style={style} className='left'></div> */}
    <div style={style} className='right'></div>
</div>

     );
}
 
export default Arrows;