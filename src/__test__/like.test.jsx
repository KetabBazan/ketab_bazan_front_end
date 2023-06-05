import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Enzyme,{shallow} from 'enzyme';
import Comment from "../Components/Comment/Comment";
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


     Enzyme.configure({ adapter: new Adapter()});



     const setup = () => {
            return render(<Comment  />);
           
      }

      const findbytestAttribute = (wrapper , val) =>
      {
         return wrapper.find(`[data-test="${val}"]`);
      }

      test("render without error like" , () => {
         const wrapper =  shallow(<Comment/>);
          const component = findbytestAttribute(wrapper, 'like');
          expect(component.length).toBe(1);
      })


      test("render without error dislike" , () => {
       const wrapper =  shallow(<Comment/>);
       const component = findbytestAttribute(wrapper, 'dislike');
       expect(component.length).toBe(1);
    })


    test("dislike button work correctly" , () => {
       const wrapper =   shallow(<Comment/>);
       const dislikevaluebeforclick = findbytestAttribute(wrapper, 'dislikevalue');
       const dislikebutton = findbytestAttribute(wrapper, 'dislike');
       dislikebutton.simulate('click');
       const dislikevalue = findbytestAttribute(wrapper, 'dislikevalue');
       expect(dislikevalue.contain()).toBe(dislikevaluebeforclick.text() - 1);
      
    })