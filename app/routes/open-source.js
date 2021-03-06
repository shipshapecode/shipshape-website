import Route from '@ember/routing/route';

export default class OpenSource extends Route {
  afterModel(model) {
    model.metaTags = {
      title: 'Ember Addons and Open Source - Ship Shape',
      description:
        'We collaborate extensively with the Ember community on all facets of Ember. ' +
        'From documentation, to Ember CLI, and Ember itself. ' +
        'We have written several Ember addons of our own, and we are maintainers for the html-next ' +
        'addons, including flexi and vertical-collection.',
      type: 'website',
      url: 'https://shipshape.io/open-source/'
    };
  }
}
