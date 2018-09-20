import React, {Component} from "react";
import TopHeader from "../components/top_header/TopHeader";
import SideMenu from "../components/side_menu/SideMenu";
import FloatButtonContainer from "../containers/floatButtonContainer";
import DirectoryContainer from "../containers/directoryContainer";

class InboxView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid padding-none">
                <TopHeader />
                <SideMenu />
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 body-wrapper">
                    <DirectoryContainer />
                </div>
                <FloatButtonContainer />
            </div>
        )
    }
}

export default InboxView;
