/**
 * Copyright © 2014 ITD Systems
 *
 * This file is part of Alvex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function() {
	YAHOO.Bubbling.fire("registerAction",
	{
		actionName: "onActionViewRegistryItem",
		fn: function (file) {
			Alfresco.util.Ajax.jsonRequest({
				url: Alfresco.constants.PROXY_URI + "api/alvex/documents-registers/parent-registry-item"
						+ "?fileRef=" + file.nodeRef,
				method: Alfresco.util.Ajax.GET,
				dataObj: null,
				successCallback:
				{
					fn: function (resp)
					{
						window.location = Alfresco.constants.URL_PAGECONTEXT +
											"view-metadata?nodeRef=" + resp.json.itemRef;
					},
					scope:this
				},
				failureCallback:
				{
					fn: function (resp)
					{
						if (resp.serverResponse.statusText)
							Alfresco.util.PopupManager.displayMessage({ text: resp.serverResponse.statusText });
					},
					scope:this
				}
			});
		}
	});
})();