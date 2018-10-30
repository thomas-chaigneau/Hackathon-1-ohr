import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Places from 'places.js';

class PlacesList extends Component {
  constructor(props) {
    super(props);
    this.state = {placeOfliving: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    placeholder: PropTypes.string,
    /* eslint-disable react/no-unused-prop-types */
    onCursorChanged: PropTypes.func,
    onSuggestions: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onLimit: PropTypes.func,
    onError: PropTypes.func,
    options: PropTypes.shape({
      type: PropTypes.oneOf([
        'city',
        'country',
        'address',
        'busStop',
        'trainStation',
        'townhall',
        'airport',
      ]),
      countries: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
        if (propValue[key].length !== 2) {
          return new Error(`Invalid prop \`${propFullName}\` supplied to`
            + ` \`${componentName}\`. Validation failed.`);
        }
        return true;
      }),
      aroundLatLng: PropTypes.string,
      aroundLatLngViaIP: PropTypes.bool,
      aroundRadius: PropTypes.number,
      templates: PropTypes.object,
      style: PropTypes.bool,
      appId: PropTypes.string,
      apiKey: PropTypes.string,
      useDeviceLocation: PropTypes.bool,
      computeQueryParams: PropTypes.object,
      clientOptions: PropTypes.object,
      autocompleteOptions: PropTypes.object,
      insideBoundingBox: PropTypes.string,
      insidePolygon: PropTypes.string,
    }),
  };

  static defaultProps = {
    placeholder: 'Ton adresse, Vieux con',
    onCursorChanged: null,
    onSuggestions: null,
    onChange: null,
    onClear: null,
    onLimit: null,
    onError: null,
    options: {},
  };

  

  componentDidMount() {
    this.autocomplete = Places({
      ...this.props.options,
      container: this.autocompleteElem,
    });

    this.autocompleteListeners = [
      'onSuggestions',
      'onCursorChanged',
      'onChange',
      'onClear',
      'onLimit',
      'onError',
    ]
      .filter(prop => !!this.props[prop])
      .map(prop => ({ prop, eventName: prop.substr(2).toLowerCase() }));

    this.autocompleteListeners
      .forEach(({ prop, eventName }) => this.autocomplete.on(eventName, this.props[prop]));
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this.autocompleteListeners
      .forEach(({ eventName }) => this.autocomplete.removeAllListeners(eventName));
  }

  handleSubmit(event) {
    event.preventDefault()
    let yo = this.autocompleteElem.value
    yo = yo.split(', ')[1].split(' ')[1]
    yo = yo.slice(0, yo.indexOf('e'))
    yo= yo.padStart(5, '7500');
    this.setState({placeOfliving: yo});
  }

  render() {
    const {
      onChange,
      onClear,
      onCursorChanged,
      onError,
      onLimit,
      onSuggestions,
      options,
      ...inputProps
    } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id="placeOfliving" 
            type="text" 
            aria-label={this.props.placeholder}
            ref={(ref) => { this.autocompleteElem = ref; }}
            {...inputProps}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PlacesList;
