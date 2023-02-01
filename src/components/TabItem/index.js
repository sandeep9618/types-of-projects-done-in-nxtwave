import './index.css'

const TabItem = props => {
  const {tabDetails, tabItemsChange, currentStatus} = props
  const {displayText, tabId} = tabDetails

  const changeTab = () => {
    tabItemsChange(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={
          currentStatus === tabId ? 'active-tab-btn tab-btn' : 'tab-btn'
        }
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
