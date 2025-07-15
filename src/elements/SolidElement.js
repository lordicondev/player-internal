import {
    extendPrototype,
} from '../utils/functionExtensions';
import createNS from '../utils/helpers/svg_elements';
import BaseElement from './BaseElement';
import FrameElement from './helpers/FrameElement';
import HierarchyElement from './helpers/HierarchyElement';
import RenderableDOMElement from './helpers/RenderableDOMElement';
import TransformElement from './helpers/TransformElement';
import SVGBaseElement from './svgElements/SVGBaseElement';

function ISolidElement(data, globalData, comp) {
    this.initElement(data, globalData, comp);
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], ISolidElement);

ISolidElement.prototype.createContent = function () {
    var rect = createNS('rect');
    // rect.style.width = this.data.sw;
    // rect.style.height = this.data.sh;
    // rect.style.fill = this.data.sc;
    rect.setAttribute('width', this.data.sw);
    rect.setAttribute('height', this.data.sh);
    rect.setAttribute('fill', this.data.sc);
    this.layerElement.appendChild(rect);
};

export default ISolidElement;
