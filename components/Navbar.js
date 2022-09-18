import {market} from './../config/market.js'
import React, {useState} from 'react';
import Script from 'next/script';
import Link from 'next/link';
import ShowSupply from './showSupply.js';

export var mbutChange;

export default function Navbar(){
    function change(name){
        mbutChange=name;
    }  
    return(
        <div>

            {market.map(item => {
                return <div class=" list-group w-25 h-50 l-navbar" key={item.name}>
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active border border-dark w-100 h-100" style={{backgroundColor: '#C7C4FF !important'}}>
                        <div class=" d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{item.name}</h5>
                        <small>{item.distance}</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <span>
                                <button class="mt-50 hover-shadow hover-zoom border-0 rounded text-sm" onClick={change(item)}>
                                    {item.supp?"Supplibility":"Ineligible"}
                                </button>
                        </span>
                    </a>
                </div>
            })}

        </div>
    )

}
