import React, { useContext } from "react"
import "./styles.css"
import { CoinsContext } from "../../context/CoinsContext"
import { useFilterCoins } from "../../helpers/hooks/useFilterCoins"

const FilterBlock = ({ setCoins }) => {
	const coinsContext = useContext(CoinsContext)
	const { coins } = coinsContext

	const {setValue, value} = useFilterCoins(setCoins, coins)

	return <div className='filter-block'>
		<input className='input' 
		onChange={(e) => setValue(e.target.value)} 
		value={value} 
		type='text' 
		placeholder="enter crypto name" />
	</div>
}

export default React.memo(FilterBlock)