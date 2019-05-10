import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Default extends Component {
    render() {
        return (
             <div className="container"> 
             	 <div className="row"> 
             	 <div className="col-10 mx-auto text-center text-uppercase text-title pt-5">
             	  <div class="error-template">
                <h1 className="display-3">
                    Oops!</h1>
                <h1 className="display-3">
                    404
                    </h1>
                     <h2>page not found</h2>                               
             	 </div>             	 
        		</div>
           	 	</div>
            </div>
        );
    }
}

export default Default;