<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/programme">
        <html>
            <head>
                <title>
                    <xsl:value-of select="degree"/>(<xsl:value-of select="year"/>)
                </title>
            </head>
            <body>
                <h2>List of Distinctions</h2>
                <ul>
                    <xsl:for-each select="results/distinction/name">
                        <li><xsl:value-of select="."/></li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

<!--/usr/local/Cellar/saxon/9.7.0.4/bin/saxon -o:programme.html programme.xml programme.xsl-->