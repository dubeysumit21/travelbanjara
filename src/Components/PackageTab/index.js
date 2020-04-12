import React, { Component } from 'react';
import classes from './PackageTab.css';

class PackageTab extends Component {

    state = {
        tabConfig: [
            { text: 'About', id: 1 },
            { text: 'Things to bring', id: 2 },
            { text: 'Includes', id: 3 },
            { text: 'Excludes', id: 4 },
            { text: 'Cancellation Poicy', id: 5 },
        ],
        selectedTab: null,
    };

    changeTabHandler = item => {
        console.info('item received', item);
        const { tabConfig } = this.state;
        const tempTabConfig = tabConfig.map(tc => {
            if (tc.id === item.id) {
                return {
                    ...tc,
                    selected: true,
                }
            } else {
                return {
                    ...tc,
                    selected: false,
                }
            }
        });
        this.setState({ tabConfig: tempTabConfig }, () => console.info('===>', this.state.tabConfig));
    }

    render() {
        const { tabConfig } = this.state;
        const { onClick, content } = this.props;
        return (
            <div className={classes.mainDiv}>
                <div className={classes.descHeading}>
                    <h2 className={classes.descHeadingText}>Camp Details - {content.location}</h2>
                </div>
                <div className={classes.descBody}>
                    <div className={classes.leftSide}>
                        <div className={classes.tabContainer}>
                            {tabConfig.map(tab => <button onClick={() => this.changeTabHandler(tab)} className={tab.selected ? classes.selectedTab : classes.individualTab}>{tab.text}</button>)}
                        </div>
                    </div>
                    <div className={classes.rightSide}>
                        <button className={classes.okButton} onClick={onClick}>OK</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PackageTab;