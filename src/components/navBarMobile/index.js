import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Search } from '../../components/Search'
import {
    logo,
    menu,
    cartShop,
    cancel,
    add,
    minimize
} from '../../assets/img'
import './style.scss'

const NavBarMobile = () => {
    const [isOpenNavBar, setIsOpenNavBar] = useState(false)
    const [isActivWineType, setIsActivWineType] = useState(false)
    const [isActivWineSub, setIsActivWineSub] = useState(false)
    const [isActivSpiritsType, setIsActivSpiritsType] = useState(false)
    const [isActivBeerType, setIsActivBeerType] = useState(false)
    const [isActiveGiftType, setIsActiveGiftType] = useState(false)
    const [isActivePreOrderType, setIsActivePreOrderType] = useState(false)
    const [isActivWhiteWineType, setIsActivWhiteWineType] = useState(false)
    const [isMenuType, setMenuType] = useState('menu')
    return (

        <div className="wrapper-mobile">
            <div className="container-mobile" >
                <div className="item menu" onClick={() => setIsOpenNavBar(true)}  >
                    <img src={menu} alt="menu" />
                    {/* <img src="../../assets/img/icons/right-arrow.svg" alt=""/> */}
                </div>
                <div className="item logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="item cart">
                    <img src={cartShop} alt="cartShop" />
                </div>
                <Search />
            </div>
           
            <div className="navigation-bar" style={isOpenNavBar ? { left: 0 } : { left: '-100%' }}>
                <div className="menu-label-wrapper">
               
                    <span className="menu-nav" style={isMenuType === 'menu' ? { color: '#ae0814' } : { color: '#262626' }}
                        onClick={() => setMenuType('menu')}>Menu</span>
                    <span className="setting-nav" style={isMenuType === 'settings' ? { color: '#ae0814' } : { color: '#262626' }}
                        onClick={() => setMenuType('settings')}>Settings</span>
                             {/* close */}
                    <div className="nav-items close">
                        <div>
                            <img src={cancel} alt="close" onClick={() => { setIsOpenNavBar(false) }} />
                        </div>
                    </div>
                    {/* close */}
                </div>
                {isMenuType === 'menu' ? <div className="nav-list-container">

                    <div className="nav-items" >
                        <Link to="/" style={isActivWineType ? { color: '#ae0814' } : { color: '#fff' }}>Wine</Link>
                        <div className="add" onClick={() => setIsActivWineType(!isActivWineType)}>
                            {isActivWineType ? <img src={minimize} alt="minimize" /> :
                                <img src={add} alt="add" />}
                        </div>
                    </div>
                    <div className="sub-wrapper-wine" style={isActivWineType ? { display: 'block' } : { display: 'none' }}>
                        <div className="sub-item nav-items" onClick={() => setIsActivWineSub(!isActivWineSub)}>
                            <Link to='/' style={isActivWineSub ? { color: '#ae0814' } : { color: '#fff' }} >Red wine</Link>
                            <div className="add" >
                                {isActivWineSub ? <img src={minimize} alt="minimize" /> :
                                    <img src={add} alt="add" />}
                            </div>
                        </div>
                        <div className="sub-fNameoldered-wrapper"
                            style={isActivWineSub ? { display: 'block' } : { display: 'none' }} >
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/shiraz">Shiraz</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/merlot">Merlot</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/cabernet-sauvignon">Cabernet</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/cabernet-sauvignon">Sauvignon</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/malbec">Malbec</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/pinot-noir">Pinot Noir</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/zinfandel">Zinfandel</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/sangiovese">Sangiovese</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/barbera">Barbera</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/red-blendLink">Red blends</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/rose-wine">Rose Wine </Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/sangria">Sangria</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/port">Port</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/red/syrah">Syrah</Link></div>
                        </div>
                        <div className="sub-item nav-items"><Link to="/types/wine/sparkling">Sparkling wine</Link></div>
                        <div className="sub-item nav-items"><Link to="/types/wine/sake">sake</Link></div>

                        <div className="sub-item nav-items ">
                            <Link to="/" style={isActivWhiteWineType ? { color: '#ae0814' } : { color: '#fff' }}>white wine</Link>
                            <div className="add" onClick={() => setIsActivWhiteWineType(!isActivWhiteWineType)}>
                                {isActivWhiteWineType ? <img src={minimize} alt="minimize" /> :
                                    <img src={add} alt="add" />}
                            </div>
                        </div>
                        <div className="sub-fNameoldered-wrapper"
                            style={isActivWhiteWineType ? { display: 'block' } : { display: 'none' }} >
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/chardonnay">Chardonnay </Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/sauvignon-blanc"> Sauvignon Blanc </Link> </div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/semillon"> Semillon </Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/moscato">Moscato </Link> </div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/pinot-grigio">Pinot Grigio</Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/gewurztraminer">Gewurztraminer </Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/riesling">Riesling </Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/white-blends">White blends  </Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/sangria">Sangria </Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/viognier">Viognier </Link></div>
                            <div className="sub-item nav-items"><Link to="/subcategories/wine/white/chardonnay">New Wines </Link></div>
                            <div className="sub-item nav-items"><Link to="/types/wine/90pt">90 pt Plus Wines </Link></div>
                        </div>

                        <div className="sub-item nav-items"><Link to="/">imported</Link></div>
                        <div className="sub-item nav-items"><Link to="/">domestic</Link></div>
                        <div className="sub-item nav-items"><Link to="/subcategories/wine/white/chardonnay">new wines</Link></div>
                        <div className="sub-item nav-items"><Link to="/types/wine/90pt">90pt plus</Link></div>

                    </div>


                    <div className="nav-items" >
                        <Link to="/" style={isActivSpiritsType ? { color: '#ae0814' } : { color: '#fff' }}>Spirits</Link>
                        <div className="add" onClick={() => { setIsActivSpiritsType(!isActivSpiritsType) }}>
                            {isActivSpiritsType ? <img src={minimize} alt="minimize" /> :
                                <img src={add} alt="add" />}
                        </div>
                    </div>
                    <div className="spirits-type-content" style={isActivSpiritsType ? { display: 'block' } : { display: 'none' }}>
                        <div className="sub-item nav-items"><Link to="/types/spirits/brandy">Brandy Cognac </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/gin"> Gin </Link> </div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/liqueur"> Liqueurs </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/rum">Rum </Link> </div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/tequila">Tequila</Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/vodka">Vodka </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/scotch">Scotch </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/whiskey">Whiskey </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/mixers">Mixers </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/grappa">Grappa </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/bourbon">Bourbon </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/mezcal">Mezcal </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/arak">Arak </Link></div>
                        <div className="sub-item nav-items"><Link to="/types/spirits/rtd">RTD </Link></div>
                    </div>
                    <div className="nav-items"><Link to="/</div>">Specials</Link></div>
                    <div className="nav-items">
                        <Link to="/" style={isActivBeerType ? { color: '#ae0814' } : { color: '#fff' }}>Beer</Link>
                        <div className="add" onClick={() => setIsActivBeerType(!isActivBeerType)}>
                            {isActivBeerType ? <img src={minimize} alt="minimize" /> :
                                <img src={add} alt="add" />}
                        </div>
                    </div>
                    <div className="beer-type-content" style={isActivBeerType ? { display: 'block' } : { display: 'none' }}>
                        <div className="sub-item nav-items"><Link to="/">DOMESTIC</Link></div>
                        <div className="sub-item nav-items"><Link to="/">IMPORTED </Link></div>
                    </div>
                    <div className="nav-items"><Link to="/</div>">Non Alcoholic</Link></div>

                    <div className="nav-items">
                        <Link to="/" style={isActiveGiftType ? { color: '#ae0814' } : { color: '#fff' }}>Gift sets</Link>
                        <div className="add" onClick={() => setIsActiveGiftType(!isActiveGiftType)}>
                            {isActiveGiftType ? <img src={minimize} alt="minimize" /> :
                                <img src={add} alt="add" />}
                        </div>
                    </div>
                    <div className="beer-type-content" style={isActiveGiftType ? { display: 'block' } : { display: 'none' }}>
                        <div className="sub-item nav-items"><Link to="/">Gift Baskets</Link></div>
                        <div className="sub-item nav-items"><Link to="/">Engraving </Link></div>
                        <div className="sub-item nav-items"><Link to="/">Chocolates</Link></div>
                        <div className="sub-item nav-items"><Link to="/">Decorative Bottles </Link></div>
                        <div className="sub-item nav-items"><Link to="/">Gift Sets </Link></div>
                    </div>

                    <div className="nav-items">
                        <Link to="/" style={isActivePreOrderType ? { color: '#ae0814' } : { color: '#fff' }}>pre-order</Link>
                        <div className="add" onClick={() => setIsActivePreOrderType(!isActivePreOrderType)}>
                            {isActivePreOrderType ? <img src={minimize} alt="minimize" /> :
                                <img src={add} alt="add" />}
                        </div>
                    </div>
                    <div className="pre-type-content" style={isActivePreOrderType ? { display: 'block' } : { display: 'none' }}>
                        <div className="sub-item nav-items"><Link to="/">Wine futures</Link></div>
                        <div className="sub-item nav-items"><Link to="/">Spirits </Link></div>
                    </div>
                </div> :
                    <div className="my-wish-list-login">
                        <Link to="/customer-login">My Wishlist</Link>
                        <Link to="/customer-login">Log in</Link>
                    </div>}
            </div>
        </div>

    )
}
export default NavBarMobile;


