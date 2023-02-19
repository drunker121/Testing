import React from 'react'
import { Link } from 'react-router-dom';
import '../About.css'

const Financial = () => {
  return (
    <>

    <div className='d-flex justify-content-center'>
        <Link to='/financialanalyst/calci' ><button className='btn btn-primary mt-5'>Flooring Caluclator</button> </Link>
    </div>

    <div className='abtinfo m-5 p-5'>
      <h2>Financial Analyst</h2><br></br><br></br>
      <small>Installing a new floor in your home can be a substantial challenge – unless you’re using our flooring calculator! Whether you’re constructing your dream house and choosing floor finishes, or just replacing old and used panels in an apartment, you are bound to deal with the same problems – measuring the space and estimating the cost of flooring. And while the calculations are relatively simple, we know math is the last thing you want to do while you’re renovating.</small><br></br><br></br>
      <small>We created this square foot calculator for the flooring to take the maths off your plate. Thanks to this tool, you can quickly estimate the flooring cost and calculate how much hardwood, vinyl, or laminate flooring you need to install. With our help, any construction project is going to be a breeze!</small><br></br><br></br>
      <small>Before you drive to the nearest Home Depot to buy your flooring, you have to estimate how much material you actually need. You can do it in the following way:</small><br></br><br></br>
      <ol>
        <li>Measure the room that you’re going to install the floor in. We recommend measuring the length and width and rounding them up to the nearest inch. Make sure to always consider the widest point of the room, even if the walls are not perfectly straight.</li>
        <li>Multiply the width by the length of the room to obtain the square footage. If your room is not rectangular, but has a more irregular shape, you could try determining its area with our trapezoid calculator.</li>
        <li>Once you know the area of the room, you’re good to go – this is the square footage of flooring materials you have to buy. If you want to cover the floor with square elements, the GCF calculator can be helpful if you are interested what the biggest possible size of a single tile is.</li>
        <li>If you’re willing to put a bit more effort into the calculations, consider how much additional material to buy to account for waste during installation (for example to ensure that the patterns match on all pieces of flooring). We recommend adding 5-10% of the total area for that purpose.</li>
      </ol><br></br>
      <small>Once you know this price, multiply it by the square footage of the material you need to buy to find out how much it will cost you. If the price is too high for your liking, make sure to consider other options – for example installing tiles or choosing a cheaper finish that you’ll cover with a carpet.</small><br></br><br></br>
      <small>Naturally, this price doesn’t take into account additional materials such as thresholds or special edging. If the type of flooring you chose is difficult to install, you might also have to include the cost of equipment (such as sanders or floor rollers) or even hire a contractor to help you.</small><br></br><br></br>
      <h2>Hardwood, vinyl, and laminate flooring</h2><br></br>
      <small>Choosing the type of floor finish is a difficult decision. The multitude of available options is enough to make your head spin. Luckily, we prepared a short description of the most popular types to highlight their advantages and potential problems you might encounter.</small><br></br><br></br>
      <small>Hardwood flooring is the most luxurious floor type. It’s exceptionally durable and lavish-looking, but also the most expensive of all flooring types. If you choose solid hardwood panels, you will probably need some help with the installation. Otherwise settle for cheaper varieties that are also easier to handle, such as bamboo or cork flooring.</small><br></br><br></br>
      <small>Vinyl flooring is typically sold in sheets or rolls, what gives you extreme ease of installation. It’s also much lighter than other types of flooring. You can get it much cheaper than hardwood flooring, and apply it in every area of your house, including wet areas such as kitchens or bathrooms.</small><br></br><br></br>
      <small>Laminate flooring is extremely popular because it’s both aesthetic and affordable. While it looks exactly like wood, tiles, or stone flooring, it’s much cheaper and easier to maintain. It also has the advantage of simple installation (usually using click locks). You can find a wide range of scratch- and water-resistant laminates at virtually every store with construction materials.</small><br></br><br></br><br></br>
    </div>
    
    </>
  )
}

export default Financial