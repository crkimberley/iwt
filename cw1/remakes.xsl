<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="remakes">

                <table>
                    <tr>
                        <th>Remake</th>
                        <th>Year</th>
                        <th>Original</th>
                        <th>Year</th>
                        <th>Fraction</th>
                    </tr>
                    <xsl:for-each select="remake">
                        <tr>
                            <td><xsl:value-of select="rtitle"/></td>
                            <td><xsl:value-of select="ryear"/></td>
                            <td><xsl:value-of select="stitle"/></td>
                            <td><xsl:value-of select="syear"/></td>
                            <td><xsl:value-of select="fraction"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

    </xsl:template>

</xsl:stylesheet>