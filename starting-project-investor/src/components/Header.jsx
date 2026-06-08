import headerLogo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={headerLogo} alt="header logo"/>
            <h1>Investiment Calculator</h1>
        </header>
    )
}