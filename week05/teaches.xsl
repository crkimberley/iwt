<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/teaches">
        <teaches>
            <xsl:for-each select="teaches-tuple">
                <teaches-tuple>
                    <course><xsl:value-of select="@course"/></course>
                    <lecturer><xsl:value-of select="@lecturer"/></lecturer>
                </teaches-tuple>
            </xsl:for-each>
        </teaches>
    </xsl:template>
</xsl:stylesheet>