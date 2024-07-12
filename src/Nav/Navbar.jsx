import { useState, useEffect } from "react";
import './Navbar.css';

function Navbar(){

return (
<div className="project__navbar gradient__bg">
<li>
    <a href="#">Αρχική</a>
</li>
<li>
    <a href="#">Ποιοί Είμαστε</a>
</li>
<li>
    <a href="#">Συστήματα</a>
</li>
<li>
    <a href="#">Τι είναι η Ιστορική Σπαθασκία;</a>
</li>
<li>
    <a href="#">Blog</a>
</li>

<li className="project__seperator"> | </li>


</div>


);
}
export default Navbar