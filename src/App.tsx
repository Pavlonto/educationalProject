import React, {useState} from 'react';
import './App.css';
import Accordion from "./Accordion";
import Rating, {RatingValueType} from "./Rating"
import {OnOffUC} from "./components/OnOff/OnOffUC";
import AccordionUC from "./AccordionUC";
import RatingUC from "./RatingUC";
import {OnOff} from "./components/OnOff/OnOff";



function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<boolean>(false)

    return (
        <div>
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My Friend"}/>*/}
            {/*Article 1*/}
            <Rating value={ratingValue} setRatingValue={setRatingValue} />
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<AccordionUC title={"Menu"}/>*/}
            {/*Article 2*/}
            {/*<Rating value={1}/>*/}
            {/*<RatingUC/>*/}
            <OnOffUC setOnOff={setOnOff}/> {onOff.toString()}
            {/*<OnOff setOnOff={setOnOff} onOff={onOff}/>*/}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;
