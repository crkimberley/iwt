<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/proceedings">
        <html>
            <head/>
            <body>
                <h1><xsl:value-of select="name"/></h1>
                <ul>
                    <xsl:for-each select="//author">
                        <li><xsl:value-of select="."/></li>
                    </xsl:for-each>
                </ul>
                <xsl:for-each select="//article">
                    <p>
                        <xsl:for-each select="author">
                            <xsl:value-of select="."/>,
                        </xsl:for-each>
                        <br/>
                        "<em><xsl:value-of select="title"/></em>", pp.
                        <xsl:value-of select="pages"/>.
                    </p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>

<!--ALTERNATIVE VERSION USING RULES RATHER THAN FOR-EACH
<xsl:template match="/proceedings">
    <html>
    <head />
    <body>
      <h1><xsl:value-of select="name"/></h1>
      <p>
        <xsl:for-each select="contents/article/author">
          <xsl:value-of select="."/><br />
        </xsl:for-each>
      </p>
      <xsl:apply-templates select="contents/article"/>
    </body>
    </html>
  </xsl:template>

  <xsl:template match="article">
    <p>
      <xsl:apply-templates select="*"/>
    </p>
  </xsl:template>

  <xsl:template match="author">
    <xsl:value-of select="."/>,
  </xsl:template>

  <xsl:template match="title">
    <br />"<em><xsl:value-of select="."/></em>,"
  </xsl:template>

  <xsl:template match="pages">
    pp. <xsl:value-of select="."/>.
  </xsl:template>

</xsl:stylesheet>-->