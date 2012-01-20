package com.fotographity;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class FotographityAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public FotographityAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
					
					properties.setString("ti.deploytype", "development");
	}
	
	public String getId() {
		return "com.fotographity";
	}
	
	public String getName() {
		return "fotographity";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "glenn";
	}
	
	public String getUrl() {
		return "http://fotographity.com";
	}
	
	public String getCopyright() {
		return "2012 by glenn";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "c0c6ce72-88fe-40f6-bcd2-b0462b9883e6";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
