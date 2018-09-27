﻿import UI from '../../ui/UI';
import Logo from './Logo';
import SceneMenu from './SceneMenu';
import EditMenu from './EditMenu';
import AddMenu from './AddMenu';
import AssetMenu from './AssetMenu';
import TerrainMenu from './TerrainMenu';
import PhysicsMenu from './PhysicsMenu';
import ComponentMenu from './ComponentMenu';
import PlayMenu from './PlayMenu';
import OptionsMenu from './OptionsMenu';
import HelpMenu from './HelpMenu';
import StatusMenu from './StatusMenu';

/**
 * 菜单栏
 * @author mrdoob / http://mrdoob.com/
 * @author tengge / https://github.com/tengge1
 */
function Menubar(options) {
    UI.Control.call(this, options);
    this.app = options.app;
};

Menubar.prototype = Object.create(UI.Control.prototype);
Menubar.prototype.constructor = Menubar;

Menubar.prototype.render = function () {
    var params = { app: this.app };

    var container = UI.create({
        xtype: 'div',
        id: 'menubar',
        cls: 'menubar',
        parent: this.parent,
        children: [
            // Logo
            new Logo(params),

            // 左侧
            new SceneMenu(params),
            new EditMenu(params),
            new AddMenu(params),
            new AssetMenu(params),
            new TerrainMenu(params),
            new PhysicsMenu(params),
            new ComponentMenu(params),
            new PlayMenu(params),
            new OptionsMenu(params),
            new HelpMenu(params),

            // 右侧
            new StatusMenu(params)
        ]
    });

    container.render();
};

export default Menubar;