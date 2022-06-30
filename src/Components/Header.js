import React from 'react';
import tree from '../hangmandrawings/state1.GIF'
import tree1 from '../hangmandrawings/state2.GIF'
import tree2 from '../hangmandrawings/state3.GIF'
import tree3 from '../hangmandrawings/state4.GIF'
import tree4 from '../hangmandrawings/state5.GIF'
import tree5 from '../hangmandrawings/state6.GIF'
import tree6 from '../hangmandrawings/state7.GIF'
import tree7 from '../hangmandrawings/state8.GIF'
import tree8 from '../hangmandrawings/state9.GIF'
import tree9 from '../hangmandrawings/state10.gif'
import tree10 from '../hangmandrawings/state11.GIF'

function Header (props)
{
    let chance = props.num;
    //number of chances is accepted as props and conditionally rendered based on number of chances
    return (
        <div>
            {chance === 10 &&
                <img src={tree} alt='' />
            }
            {chance === 9 &&
                <img src={tree1} alt='' />
            }
            {chance === 8 &&
                <img src={tree2} alt='' />
            }
            {chance === 7 &&
                <img src={tree3} alt='' />
            }
            {chance === 6 &&
                <img src={tree4} alt='' />
            }
            {chance === 5 &&
                <img src={tree5} alt='' />
            }
            {chance === 4 &&
                <img src={tree6} alt='' />
            }
            {chance === 3 &&
                <img src={tree7} alt='' />
            }
            {chance === 2 &&
                <img src={tree8} alt='' />
            }
            {chance === 1 &&
                <img src={tree9} alt='' />
            }
            {chance === 0 &&
                <img src={tree10} alt='' />
            }
        </div>
    );
}

export default Header;