'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">true</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-da77da25952a6854173d8dc4710c6990f5e2a5d3d6502eaad35a08fa761fcae3213588600a23516b31341c90da2c58fb495c8eb85c2a078d7c4df325dee19986"' : 'data-target="#xs-controllers-links-module-AppModule-da77da25952a6854173d8dc4710c6990f5e2a5d3d6502eaad35a08fa761fcae3213588600a23516b31341c90da2c58fb495c8eb85c2a078d7c4df325dee19986"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-da77da25952a6854173d8dc4710c6990f5e2a5d3d6502eaad35a08fa761fcae3213588600a23516b31341c90da2c58fb495c8eb85c2a078d7c4df325dee19986"' :
                                            'id="xs-controllers-links-module-AppModule-da77da25952a6854173d8dc4710c6990f5e2a5d3d6502eaad35a08fa761fcae3213588600a23516b31341c90da2c58fb495c8eb85c2a078d7c4df325dee19986"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-da77da25952a6854173d8dc4710c6990f5e2a5d3d6502eaad35a08fa761fcae3213588600a23516b31341c90da2c58fb495c8eb85c2a078d7c4df325dee19986"' : 'data-target="#xs-injectables-links-module-AppModule-da77da25952a6854173d8dc4710c6990f5e2a5d3d6502eaad35a08fa761fcae3213588600a23516b31341c90da2c58fb495c8eb85c2a078d7c4df325dee19986"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-da77da25952a6854173d8dc4710c6990f5e2a5d3d6502eaad35a08fa761fcae3213588600a23516b31341c90da2c58fb495c8eb85c2a078d7c4df325dee19986"' :
                                        'id="xs-injectables-links-module-AppModule-da77da25952a6854173d8dc4710c6990f5e2a5d3d6502eaad35a08fa761fcae3213588600a23516b31341c90da2c58fb495c8eb85c2a078d7c4df325dee19986"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactModule-84b7bc548ae7804f8ce185e6357e7422d2f6f4290371f51b316538d77a19b5e3d3e62cdcff835a2a2886e5a0970158ebf2ddf7dfab7346eebd6b5518c3de0983"' : 'data-target="#xs-controllers-links-module-ContactModule-84b7bc548ae7804f8ce185e6357e7422d2f6f4290371f51b316538d77a19b5e3d3e62cdcff835a2a2886e5a0970158ebf2ddf7dfab7346eebd6b5518c3de0983"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactModule-84b7bc548ae7804f8ce185e6357e7422d2f6f4290371f51b316538d77a19b5e3d3e62cdcff835a2a2886e5a0970158ebf2ddf7dfab7346eebd6b5518c3de0983"' :
                                            'id="xs-controllers-links-module-ContactModule-84b7bc548ae7804f8ce185e6357e7422d2f6f4290371f51b316538d77a19b5e3d3e62cdcff835a2a2886e5a0970158ebf2ddf7dfab7346eebd6b5518c3de0983"' }>
                                            <li class="link">
                                                <a href="controllers/ContactController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactModule-84b7bc548ae7804f8ce185e6357e7422d2f6f4290371f51b316538d77a19b5e3d3e62cdcff835a2a2886e5a0970158ebf2ddf7dfab7346eebd6b5518c3de0983"' : 'data-target="#xs-injectables-links-module-ContactModule-84b7bc548ae7804f8ce185e6357e7422d2f6f4290371f51b316538d77a19b5e3d3e62cdcff835a2a2886e5a0970158ebf2ddf7dfab7346eebd6b5518c3de0983"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactModule-84b7bc548ae7804f8ce185e6357e7422d2f6f4290371f51b316538d77a19b5e3d3e62cdcff835a2a2886e5a0970158ebf2ddf7dfab7346eebd6b5518c3de0983"' :
                                        'id="xs-injectables-links-module-ContactModule-84b7bc548ae7804f8ce185e6357e7422d2f6f4290371f51b316538d77a19b5e3d3e62cdcff835a2a2886e5a0970158ebf2ddf7dfab7346eebd6b5518c3de0983"' }>
                                        <li class="link">
                                            <a href="injectables/ContactService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-98f5b73640e4f977c9dd1f6836f4f5f0f8c83dfbc881ee6c88139ffdfdad6afabda4000940152b89a6a81a10d9dd272077f772f7480bcf22e10275c54ff307a9"' : 'data-target="#xs-controllers-links-module-UsersModule-98f5b73640e4f977c9dd1f6836f4f5f0f8c83dfbc881ee6c88139ffdfdad6afabda4000940152b89a6a81a10d9dd272077f772f7480bcf22e10275c54ff307a9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-98f5b73640e4f977c9dd1f6836f4f5f0f8c83dfbc881ee6c88139ffdfdad6afabda4000940152b89a6a81a10d9dd272077f772f7480bcf22e10275c54ff307a9"' :
                                            'id="xs-controllers-links-module-UsersModule-98f5b73640e4f977c9dd1f6836f4f5f0f8c83dfbc881ee6c88139ffdfdad6afabda4000940152b89a6a81a10d9dd272077f772f7480bcf22e10275c54ff307a9"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-98f5b73640e4f977c9dd1f6836f4f5f0f8c83dfbc881ee6c88139ffdfdad6afabda4000940152b89a6a81a10d9dd272077f772f7480bcf22e10275c54ff307a9"' : 'data-target="#xs-injectables-links-module-UsersModule-98f5b73640e4f977c9dd1f6836f4f5f0f8c83dfbc881ee6c88139ffdfdad6afabda4000940152b89a6a81a10d9dd272077f772f7480bcf22e10275c54ff307a9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-98f5b73640e4f977c9dd1f6836f4f5f0f8c83dfbc881ee6c88139ffdfdad6afabda4000940152b89a6a81a10d9dd272077f772f7480bcf22e10275c54ff307a9"' :
                                        'id="xs-injectables-links-module-UsersModule-98f5b73640e4f977c9dd1f6836f4f5f0f8c83dfbc881ee6c88139ffdfdad6afabda4000940152b89a6a81a10d9dd272077f772f7480bcf22e10275c54ff307a9"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactController.html" data-type="entity-link" >ContactController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Contact.html" data-type="entity-link" >Contact</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Profile.html" data-type="entity-link" >Profile</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateContactDto.html" data-type="entity-link" >CreateContactDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseInterceptor.html" data-type="entity-link" >ResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});